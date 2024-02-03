import './first.scss';
import { ProductsMini } from '../../components/products/products';
import { ArtistsSlider } from '../../components/artistsSlider/artistsSlider';
import { Wrapper } from '../../components/global/wrapper/wrapper';

export function First() {
    return (
        <Wrapper>
            <ArtistsSlider/>
            <ProductsMini/>
        </Wrapper>
    )
}
