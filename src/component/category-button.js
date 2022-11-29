import { Button } from 'react-bootstrap';

function CategoryButton({ category, clicked }) {
    // console.log(category);
  return (
    <div className="button-container">
      <Button variant="light" onClick={() => clicked('Definisi')} category={'Definisi'}>Definisi</Button>
      <Button variant="light" onClick={() => clicked('Tips Parenting')} category={'Tips Parenting'}>Tips Parenting</Button>
      <Button variant="light" onClick={() => clicked('Moral Anak')} category={'Moral Anak'}>Moral Anak</Button>
      <Button variant="light" onClick={() => clicked('Perilaku Anak')} category={'Perilaku Anak'}>Perilaku Anak</Button>
      <Button variant="light" onClick={() => clicked('Pencegahan')} category={'Pencegahan'}>Pencegahan</Button>
    </div>
  );
}

export default CategoryButton;
