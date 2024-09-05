import React, { useState, useRef } from 'react';
import { Send, Paperclip } from 'lucide-react';
import Upload from "../upload/Upload";

export default function ResponsiveChatInput() {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [img, setImg] = useState(null);
  const fileInputRef = useRef(null);
  const endRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || attachment || img) {
      console.log('Sending message:', message);
      console.log('Attachment:', attachment);
      console.log('Uploaded image:', img);
      setMessage('');
      setAttachment(null);
      setImg(null);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-form">
        <button
          type="button"
          className="attachment-button"
          onClick={() => fileInputRef.current?.click()}
        >
          <Paperclip size={20} />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-textarea"
        />
        <button type="submit" className="send-button" disabled={!message.trim() && !attachment && !img}>
          <Send size={20} />
        </button>
      </form>
      {attachment && (
        <div className="attachment-info">
          Attached: {attachment.name}
        </div>
      )}
      
      {/* Additional Form */}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit} ref={formRef}>
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" className="arrow" alt="arrow" />
        </button>
      </form>

      <style jsx>{`
        .chat-input-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 16px;
        }

        .chat-form,
        .newForm {
          display: flex;
          align-items: flex-end;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .chat-textarea {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 12px 16px;
          font-size: 16px;
          resize: none;
          min-height: 40px;
          max-height: 120px;
          font-family: inherit;
        }

        .attachment-button,
        .send-button,
        .newForm button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .attachment-button {
          color: #718096;
        }

        .send-button {
          color: #2b6cb0;
        }

        .send-button:disabled {
          color: #cbd5e0;
          cursor: not-allowed;
        }

        .attachment-button:hover,
        .send-button:hover:not(:disabled),
        .newForm button:hover {
          background-color: #f7fafc;
        }

        .attachment-info {
          margin-top: 8px;
          font-size: 14px;
          color: #718096;
        }

        .newForm input[type="text"] {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 12px;
          font-size: 16px;
          font-family: inherit;
        }

        .newForm button img.arrow {
          width: 20px;
          height: 20px;
        }

        /* Media Queries */
        @media (max-width: 639px) {
          .chat-input-container {
            padding: 8px;
          }

          .chat-form,
          .newForm {
            flex-direction: column;
            align-items: stretch;
          }

          .chat-textarea {
            border-bottom: 1px solid #e0e0e0;
          }

          .attachment-button,
          .send-button,
          .newForm button {
            padding: 8px;
          }
        }

        @media (min-width: 640px) and (max-width: 767px) {
          .chat-input-container {
            padding: 12px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .chat-input-container {
            padding: 16px;
          }

          .chat-textarea {
            font-size: 15px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .chat-input-container {
            padding: 20px;
          }

          .chat-form,
          .newForm {
            border-radius: 12px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1535px) {
          .chat-input-container {
            padding: 24px;
          }

          .chat-textarea {
            font-size: 17px;
          }
        }

        @media (min-width: 1536px) {
          .chat-input-container {
            padding: 28px;
          }

          .chat-form,
          .newForm {
            border-radius: 16px;
          }

          .chat-textarea {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
