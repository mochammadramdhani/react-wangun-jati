import React, { Component } from "react";
import ReactModal from "react-modal";

class DeleteConfirmationModal extends Component {
  render() {
    const { isOpen, onClose, onDelete, targetType } = this.props;

    return (
      <ReactModal className={"overflow-hidden"} ariaHideApp={false} isOpen={isOpen}>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-base-100 py-12">
          <div class="relative px-6 pt-10 pb-9 shadow-xl mx-auto rounded-2xl">
            <div class="flex flex-col space-y-16">
              <h4 className="self-center text-lg text-base-content">Apakah anda ingin menghapus pesan anda? {targetType}?</h4>
              <div className="space-x-4">
                {/* delete the target and close the modal */}
                <button className="btn btn-error" onClick={onDelete}>
                  Hapus
                </button>

                {/* closes the modal without deleting the target */}
                <button className="btn btn-primary" onClick={onClose}>
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default DeleteConfirmationModal;
