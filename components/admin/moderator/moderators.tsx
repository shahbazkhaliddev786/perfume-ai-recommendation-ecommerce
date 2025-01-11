'use client'
import React, { useState } from 'react';

// Define types for moderator data
interface Moderator {
  id: number;
  name: string;
}

export default function ModeratorList() {
  // State to hold the list of moderators
  const [moderators, setModerators] = useState<Moderator[]>([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Samuel Adams' },
  ]);

  // State to handle whether we are editing or adding a moderator
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // State to hold the moderator currently being edited or added
  const [currentModerator, setCurrentModerator] = useState<Moderator | null>(null);

  // Function to handle adding a new moderator
  const handleAddModerator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentModerator) {
      setModerators([...moderators, currentModerator]);
      setIsEditing(false);
      setCurrentModerator(null);
    }
  };

  // Function to handle editing a moderator
  const handleEdit = (moderator: Moderator) => {
    setIsEditing(true);
    setCurrentModerator({ ...moderator });
  };

  // Function to handle saving the moderator changes
  const handleSaveModerator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentModerator) {
      const updatedModerators = moderators.map((moderator) =>
        moderator.id === currentModerator.id ? currentModerator : moderator
      );
      setModerators(updatedModerators);
      setIsEditing(false);
      setCurrentModerator(null);
    }
  };

  // Function to handle deleting a moderator
  const handleDelete = (id: number) => {
    const updatedModerators = moderators.filter((moderator) => moderator.id !== id);
    setModerators(updatedModerators);
  };

  // Function to handle the "Create New Moderator" button click
  const handleCreateNewModerator = () => {
    setIsEditing(true);
    setCurrentModerator({
      id: Date.now(), // Assign a new unique ID for the new moderator
      name: '',
    });
  };

  return (
    <div className="container mx-auto">
      {/* Add Moderator Button */}
      <button
        onClick={handleCreateNewModerator}
        className="text-white bg-gradient-to-r from-purple-500 to-red-500 shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300 px-4 py-2 rounded"
      >
        Create New Moderator
      </button>

      {/* Moderator Table */}
      <div className="mt-6">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {moderators.map((moderator) => (
              <tr key={moderator.id}>
                <td className="border border-gray-300 px-4 py-2">{moderator.name}</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(moderator)}
                    className="text-white bg-gradient-to-r from-purple-500 to-red-500 shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300 px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(moderator.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Moderator Form */}
      {isEditing && currentModerator && currentModerator.id === Date.now() && (
        <form onSubmit={handleAddModerator} className="mt-6">
          <h2 className="text-lg font-medium mb-4">Create New Moderator</h2>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={currentModerator.name}
              onChange={(e) => setCurrentModerator({ ...currentModerator, name: e.target.value })}
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Moderator
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      )}

      {/* Edit Moderator Form */}
      {isEditing && currentModerator && currentModerator.id !== Date.now() && (
        <form onSubmit={handleSaveModerator} className="mt-6">
          <h2 className="text-lg font-medium mb-4">Edit Moderator</h2>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={currentModerator.name}
              onChange={(e) => setCurrentModerator({ ...currentModerator, name: e.target.value })}
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
