'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UstadButton from '../../Button/UstadButton';
import styles from '../../../styles/UstadFileUploader.module.scss';

export interface UstadFileUploaderProps {
  onUpload: (file: File) => Promise<void>;
  className?: string;
}

const UstadFileUploader = ({ onUpload, className }: UstadFileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.name.endsWith('.mdx')) {
      setFile(selectedFile);
    } else {
      toast.error('Please select a valid MDX file.');
      setFile(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      toast.error('No file selected.');
      return;
    }

    setIsLoading(true);
    try {
      await onUpload(file);
      toast.success('File uploaded successfully.');
    } catch (error) {
      toast.error('File upload failed.');
    } finally {
      setIsLoading(false);
      setFile(null);
    }
  };

  return (
    <div className={`${styles['file-uploader']} ${className || ''}`}>
      <form onSubmit={handleSubmit} className={styles['file-uploader__form']}>
        <input
          type="file"
          accept=".mdx"
          onChange={handleFileChange}
          className={styles['file-uploader__input']}
        />
        <UstadButton
          type="submit"
          variant="primary"
          isLoading={isLoading}
          disabled={!file || isLoading}
        >
          Upload MDX
        </UstadButton>
      </form>
    </div>
  );
};

export default UstadFileUploader;
