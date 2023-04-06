import {TabCon,Button} from './styledComponents'

const TabItem=(props)=>{
    const {details,clickTabItem,isActive}=props
    const {tabId,displayText}=details
    const ItemList=()=>{
        clickTabItem(tabId)
    }

    return(
        <TabCon>
            <Button type="button" onClick={ItemList} active={isActive}>{displayText}</Button>
        </TabCon>
    )
}


export default TabItem