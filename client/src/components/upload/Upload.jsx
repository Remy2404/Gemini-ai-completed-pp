import React, { useRef } from 'react';
import { IKContext, IKUpload } from "imagekitio-react";
import { FaFilePdf, FaFileImage, FaFileWord } from 'react-icons/fa';

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

const fileTypes = {
  'image/jpeg': <FaFileImage color="#FFB13B" />,
  'image/png': <FaFileImage color="#87C6F5" />,
  'application/pdf': <FaFilePdf color="#F15642" />,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': <FaFileWord color="#4A8CFF" />,
  // Add more as needed
};

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/upload");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ setImg }) => {
  const ikUploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    setImg((prev) => ({ 
      ...prev, 
      isLoading: false, 
      dbData: res,
      filePath: res.filePath 
    }));
  };

  const onUploadStart = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg((prev) => ({
        ...prev,
        isLoading: true,
        aiData: {
          inlineData: {
            data: reader.result.split(",")[1],
            mimeType: file.type,
          },
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <div className="upload-container">
        <IKUpload
          fileName="upload-file"
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          onUploadStart={onUploadStart}
          style={{ display: "none" }}
          ref={ikUploadRef}
          accept="image/*,.pdf,.txt,.docx,.py,.java"
        />
        <label 
          onClick={() => ikUploadRef.current.click()}
          className="cursor-pointer flex items-center space-x-2"
        >
          <img src="/attachment.png" alt="attachment" className="w-6 h-6" />
        </label>
      </div>
    </IKContext>
  );
};

export function FilePreview({ file }) {
  const fileType = fileTypes[file.type] || <FaFilePdf color="#000000" />;

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg">
      <div className="w-8 h-8">
        {fileType}
      </div>
      <span className="text-sm truncate max-w-xs">{file.name}</span>
    </div>
  );
}

export default Upload;