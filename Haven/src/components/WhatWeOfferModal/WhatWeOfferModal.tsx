import "./what-we-offer-modal.css";

type WhatWeOfferModalProps = {
  onClose: () => void;
  text: String;
};
export default function WhatWeOfferModal({
  onClose,
  text,
}: WhatWeOfferModalProps) {
  return (
    <div className="modal-container">
      <button onClick={onClose} className="close-modal-icon">
        &times;
      </button>
      <div className="modal-box">
        {/* <h4 onClick={onClose} className="close-modal-icon">
          &times;
        </h4> */}
        <div className="modal-text-container">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
