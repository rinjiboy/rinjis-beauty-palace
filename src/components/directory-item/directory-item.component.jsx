import { DirectoryItems, BackgroundImage, Body} from './directory-item.style';

import { useNavigate } from 'react-router-dom';

const Directorytem = ({ category }) => {
    const { imageUrl, title, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItems onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} /> 
            <Body>
                <h2>{title}</h2>
                <p>shop Now</p>
            </Body>
        </DirectoryItems>

    );
};

export default Directorytem;