import {ListItem,ItemImage,Title,Des} from './styledComponents'

const ProjectItem=(props)=>{
    const {details}=props
    const {imageURL,title,description}=details

    return(
        <ListItem>
            <ItemImage src={imageURL} alt={title} />
            <Title>{title}</Title>
            <Des>{description}</Des>
        </ListItem>
    )
}

export default ProjectItem