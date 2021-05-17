class ImgUploader {
  async uploader(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'pm40s9gw');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dp4h0lmgl/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImgUploader;
