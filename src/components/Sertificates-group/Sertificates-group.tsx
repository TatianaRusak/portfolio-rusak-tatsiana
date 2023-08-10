import './Sertificates-group.scss';

const images = [
  './images/sertificates/sert-udemy-1.jpg',
  './images/sertificates/sert-pre.jpg',
  './images/sertificates/sert-stage-1-2.jpg',
  './images/sertificates/sert-stage-3.jpg',
];

const SertificateGroup = () => {
  const fullViewOpen = (imgSrc: string) => {
    const fullImage = document.getElementById('fullImage') as HTMLImageElement;
    const fullImageView = document.getElementById('fullImageView');
    const body = document.querySelector('body');

    if (fullImage && fullImageView && body) {
      fullImage.src = imgSrc;
      fullImageView.style.display = 'flex';
      body.classList.add('not-scroll');
    }
  };

  const fullViewClose = () => {
    const fullImageView = document.getElementById('fullImageView');
    const body = document.querySelector('body');

    if (fullImageView && body) {
      fullImageView.style.display = 'none';
      body.classList.remove('not-scroll');
    }
  };

  return (
    <>
      <ul className="sertificates__list">
        {images.map((i) => (
          <li key={i} className="sertificates__item" onClick={() => fullViewOpen(i)}>
            <img className="sertificates__img" src={i} alt="sertificate" />
          </li>
        ))}
      </ul>

      <div id="fullImageView" onClick={fullViewClose}>
        <img id="fullImage" onClick={fullViewClose} />
      </div>
    </>
  );
};

export default SertificateGroup;
