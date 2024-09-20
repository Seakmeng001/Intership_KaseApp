import { Button } from 'flowbite-react';
import useFetchData from '../../share/useFetchData';
import { useEffect, useState } from 'react';
import { BaseURL } from '../../constant/base_api';
import { AxiosHeaders } from 'axios';
import axios from 'axios';
import defaultFarmImage from '../../assets/farm.webp'; // Default placeholder image
import { HiDotsHorizontal } from "react-icons/hi";
import { useJsApiLoader } from '@react-google-maps/api';
import Map from '../../component/Map/Map';
import { mapOption } from '../../component/Map/MapConfiguration';

interface Farm {
  status: boolean;
  msg: string;
  data: [
    {
      id: number;
      owner_id: number;
      name: string;
      address: string;
      lat: string;
      phone: string;
      Ing: string;
      status: number;
      cover: string; // Assuming cover is a URL string
      logo: boolean;
      created_at: string;
      updated_at: string;
    }
  ];
}
interface AddUserResponse {
  status: boolean;
  msg: string;
  data: {
    id: number;
    first_name: string;
    last_name: string;
    profile_url: string | null;
    email: string;
    phone: string;
    auth_type: string;
    device_type: string;
    phone_verify: number;
    unique_id: number;
    fcm_token: string | null;
    status: number;
    created_at: string;
    updated_at: string;
  }
}
interface RemoveUser{
  
  "status": boolean,
  "msg": string,
  "data": []
}


function getCookie(name: string) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

const FarmPage = () => {
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [selectedFarm, setSelectedFarm] = useState<any>(null);
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null); // Track visible dropdown by farm ID
  const [addUserFarmId, setAddUserFarmId] = useState<number | null>(null); // Track which farm's dropdown is adding a user
  const [uniqueId, setUniqueId] = useState(""); // Unique ID for user being added
  const [removeUser, setRemoveUser] = useState("");
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false); // State for showing add user form
  const [removeUserFarmId, setRemoveUserFarmId] = useState<number | null>(null);
  const [showRemoveUserForm, setShowRemoveUserForm] = useState<boolean>(false); 
  const { data: farmData, isLoading: farmLoading, error: farmError, fetchData: getList } = useFetchData<Farm>(
    `${BaseURL}/farm/get_farms`,
    'GET',
    new AxiosHeaders({ Authorization: 'Bearer ' + getCookie('access_token') })
  );

  const { data: coperateUser, isLoading: userLoading, error: addUserError, fetchData: addUser } = useFetchData<AddUserResponse>(
    `${BaseURL}/farm/get_farms`,
    'POST',
    new AxiosHeaders({ Authorization: 'Bearer ' + getCookie('access_token') })
  );
  const {} = useFetchData<RemoveUser>(
    `${BaseURL}/farm/remove_coperate_user`,
    'POST',
    new AxiosHeaders({ Authorization: 'Bearer ' + getCookie('access_token') })
  );

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (farmData && farmData.data) {
      setTotal(farmData.data.length);
    }
  }, [farmData]);

  const handleNewFarmClick = () => {
    setVisible(!visible);
  };

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value);
  const onChangeAbout = (event: React.ChangeEvent<HTMLInputElement>) => setAbout(event.target.value);
  const onChangeUniqueId = (event: React.ChangeEvent<HTMLInputElement>) => setUniqueId(event.target.value);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = getCookie('access_token');
      const headers = new AxiosHeaders({ Authorization: 'Bearer ' + token });

      const newFarm = { name, address, about };
      await axios.post(`${BaseURL}/farm/create`, newFarm, { headers });

      getList(); // Refresh farm list after adding
      setName("");
      setAddress("");
      setAbout("");
      setVisible(false);
    } catch (error) {
      console.error("Error adding new farm:", error);
    }
  };

  const handleAddUserSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (addUserFarmId === null) return; // Ensure a farm ID is selected

    try {
      const token = getCookie('access_token');
      const headers = new AxiosHeaders({ Authorization: 'Bearer ' + token });

      const payload = {
        farm_id: addUserFarmId, // farm ID comes from the selected farm
        unique_id: uniqueId, // unique ID from the form input
      };

      await axios.post(`${BaseURL}/farm/add_user`, payload, { headers });

      alert('User added to the farm successfully');
      setUniqueId(""); // Clear unique_id field after submission
      setAddUserFarmId(null); // Close dropdown after adding user
      setShowAddUserForm(false); // Hide add user form
    } catch (error) {
      console.error("Error adding user to farm:", error);
    }
  };
  const handleRemoveUserSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (removeUserFarmId === null) return; // Ensure a farm ID is selected

    try {
      const token = getCookie('access_token');
      const headers = new AxiosHeaders({ Authorization: 'Bearer ' + token });

      const payload = {
        farm_id: removeUserFarmId, // farm ID comes from the selected farm
        coperate_user_id: uniqueId, // unique ID from the form input
      };

      await axios.post(`${BaseURL}/farm/remove_coperate_user`, payload, { headers });

      alert('User removed to the farm successfully');
      setUniqueId(""); // Clear unique_id field after submission
      setRemoveUserFarmId(null); // Close dropdown after adding user
      setShowRemoveUserForm(false); // Hide add user form
    } catch (error) {
      console.error("Error adding user to farm:", error);
    }
  };

  const handleIconClick = (farmId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownVisible(dropdownVisible === farmId ? null : farmId); // Toggle dropdown visibility
  };

  const handleFarmInfoClick = (farm: any) => {
    setSelectedFarm(farm); // Set the selected farm when "Farm Information" is clicked
    setDropdownVisible(null); // Close the dropdown after selecting an option
  };

  const handleAddUserClick = (farmId: number) => {
    setAddUserFarmId(farmId); // Set the farm ID for which the user is being added
    setShowAddUserForm(true); // Show the add user form
    setDropdownVisible(null); // Close the dropdown
  };
  const handleRemoveUserClick = (farmId: number) => {
    setRemoveUserFarmId(farmId); 
    setShowRemoveUserForm(true); 
    setDropdownVisible(null); 
  };

  return (
    <div>
      {/* Farm Landscape Image */}
      <img
        className="h-96 w-full object-cover"
        src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?cs=srgb&dl=pexels-nc-farm-bureau-mark-2886937.jpg&fm=jpg"
        alt="Farm landscape"
      />

      {/* Header with Total Farms and New Farm Button */}
      <div className="flex justify-between items-center p-4">
        <div>Total Farm: {total}</div>
        <Button className="h-10 w-25" onClick={handleNewFarmClick}>
          New Farm
        </Button>
      </div>

      {/* Conditionally render the form with centered positioning */}
      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="transition-transform duration-500 ease-in-out transform bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Farm</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Farm Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Farm Name"
                    value={name}
                    onChange={onChangeName}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Address"
                    value={address}
                    onChange={onChangeAddress}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <input
                    type="text"
                    id="about"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Description"
                    value={about}
                    onChange={onChangeAbout}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-gray-700 bg-gray-300 px-4 py-2 rounded-lg mr-4"
                  onClick={handleNewFarmClick}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Farm Image Gallery */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {farmData?.data.map((farm) => (
          <div key={farm.id} className="relative text-center">
            <img
              className="h-auto max-w-full rounded-lg"
              src={farm.cover ? farm.cover : defaultFarmImage} // Use farm.cover if available, otherwise use default
              alt={farm.name}
            />
            <div
              className="absolute top-2 right-2 p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200"
              onClick={(event) => handleIconClick(farm.id, event)} // Toggle dropdown for the farm
            >
              <HiDotsHorizontal className="text-gray-700" size={24} />
            </div>

            {/* Dropdown Menu */}
            {dropdownVisible === farm.id && (
              <div className="absolute top-10 right-2 bg-white rounded-lg shadow-lg p-4 z-10">
                <ul className="text-center">
                  <li
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleFarmInfoClick(farm)} // Open farm info modal
                  >
                    <h6>Farm Information</h6>
                  </li>
                  <li className="cursor-pointer py-2 px-4 hover:bg-gray-100">Edit Farm</li>
                  <li className="cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={() => handleAddUserClick(farm.id)}>
                 <h6>Add User</h6>
                  </li>
                  <li className="cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={()=> handleRemoveUserClick(farm.id)}>
                    <h6>Remove User</h6>
                  </li>
                  <li className="cursor-pointer py-2 px-4 hover:bg-gray-100">Delete Farm</li>
                </ul>
              </div>
            )}

            <h2 className="mt-2">{farm.name}</h2>
          </div>
        ))}
      </div>

      {/* Conditionally render the add user form */}
      {showAddUserForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add User to Farm</h2>
            <form onSubmit={handleAddUserSubmit}>
              <div className="mb-6">
                <label htmlFor="unique_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Unique ID
                </label>
                <input
                  type="text"
                  id="unique_id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Unique ID"
                  value={uniqueId}
                  onChange={onChangeUniqueId}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
  <button
    type="button"
    className="text-gray-700 bg-gray-300 px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-400 transition-colors duration-200 ease-in-out"
    onClick={() => setShowAddUserForm(false)}
  >
    Cancel
  </button>
  <button
    type="submit"
    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 transition-colors duration-200 ease-in-out"
  >
    Add User
  </button>
</div>

            </form>
          </div>
        </div>
      )}
      {showRemoveUserForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Remove user in farm</h2>
            <form onSubmit={handleRemoveUserSubmit}>
              <div className="mb-6">
                <label htmlFor="unique_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Coperate user
                </label>
                <input
                  type="text"
                  id="unique_id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User Id"
                  value={uniqueId}
                  onChange={onChangeUniqueId}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
  <button
    type="button"
    className="text-gray-700 bg-gray-300 px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-400 transition-colors duration-200 ease-in-out"
    onClick={() => setShowRemoveUserForm(false)}
  >
    Cancel
  </button>
  <button
    type="submit"
    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 transition-colors duration-200 ease-in-out"
  >
    Remove
  </button>
</div>

            </form>
          </div>
        </div>
      )}

      {/* Conditionally render the farm information modal */}
      {selectedFarm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">{selectedFarm.name}</h2>
            <img
              className="h-auto max-w-full rounded-lg mb-4"
              src={selectedFarm.cover ? selectedFarm.cover : defaultFarmImage} // Use selected farm cover or default image
              alt={selectedFarm.name}
            />
            <p><strong>Address:</strong> {selectedFarm.address}</p>
            <p><strong>Description:</strong> {selectedFarm.about}</p>
            <button
              onClick={() => setSelectedFarm(null)} // Close modal
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmPage;
