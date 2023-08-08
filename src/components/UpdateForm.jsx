import Modal from "react-modal";

const UpdateForm = ({
  isModalOpen,
  handleModalClose,
  updatedDescription,
  setUpdatedDescription,
  handleSaveChanges,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      contentLabel="Update Todo"
      className="update-modal"
      overlayClassName="update-overlay"
    >
      <div className="update-content">
        <h2>Update Todo</h2>
        <form>
          <label>
            Description:
            <input
              type="text"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </label>
          <div className="button-group">
            <button className="save-button" onClick={handleSaveChanges}>
              Save
            </button>
            <button className="cancel-button" onClick={handleModalClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateForm;
