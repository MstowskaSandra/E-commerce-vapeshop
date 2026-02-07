import * as S from './NotFound.styles';
import { Link } from 'react-router-dom';
import Dogo from '../../assets/404dogo.gif';
import { ArrowLeftToLine } from 'lucide-react';

const NotFound = () => (
    <S.NotFound>
        <h2>404 – Nie znaleźliśmy tej strony</h2>
        <img src={Dogo} alt='404 dogo' />
        <S.NotFoundBtn as={Link} to="/">
            <ArrowLeftToLine size={24} strokeWidth={2} />
            Wróć na stronę główną
        </S.NotFoundBtn>
    </S.NotFound>
);

export default NotFound;