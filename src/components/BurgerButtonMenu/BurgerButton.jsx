import { useMediaQuery } from 'react-responsive';
import { ReactComponent as BurgerButtonSvg } from '../../images/SVG/burgerButton.svg';
import { ButtonBurger } from './BurgerButton.styled.jsx';




const BurgerButton = ({ onClick }) => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768 });
    return (
        <ButtonBurger type="button" onClick={onClick} color={`${p => p.theme.colors.secondaryBg}`} >
            {isMobile && <BurgerButtonSvg width={28} height={28} color={`${p => p.theme.colors.secondaryBg}`} />}
            {isTablet && <BurgerButtonSvg />}
        </ButtonBurger>
    );
};

export default BurgerButton;

