import { Button } from 'react-bootstrap';

function CategoryButton({ clicked }) {
  return (
    <div className="button-container">
      <Button variant="light" onClick={() => clicked('Semua')}>Semua</Button>
      <Button variant="light" onClick={() => clicked('Definisi')}>Definisi</Button>
      <Button variant="light" onClick={() => clicked('Tips Parenting')}>Tips Parenting</Button>
      <Button variant="light" onClick={() => clicked('Moral Anak')}>Moral Anak</Button>
      <Button variant="light" onClick={() => clicked('Perilaku Anak')}>Perilaku Anak</Button>
      <Button variant="light" onClick={() => clicked('Pencegahan')}>Pencegahan</Button>
    </div>
  );
}

export default CategoryButton;
