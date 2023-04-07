import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListItemContainer,
  NameGenreContainer,
  Image,
  ImageNameContainer,
  Name,
  Genre,
  DurationDeleteButtonContainer,
  Time,
  Button,
} from './styleComponent'

const ListItems = props => {
  const {each, onClickDeleteButton} = props
  const {id, imageUrl, name, genre, duration} = each

  const onClickDelete = () => {
    onClickDeleteButton(id)
  }
  return (
    <ListItemContainer>
      <ImageNameContainer>
        <Image src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </ImageNameContainer>
      <DurationDeleteButtonContainer>
        <Time>{duration}</Time>
        <Button type="button" onClick={onClickDelete} data-testid="delete">
          <AiOutlineDelete className="delete-icon" />
        </Button>
      </DurationDeleteButtonContainer>
    </ListItemContainer>
  )
}

export default ListItems
