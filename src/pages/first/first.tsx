import './first.scss';
import { ArtistsSlider } from '../../components/artistsSlider/artistsSlider';
import { Wrapper } from '../../components/global/wrapper/wrapper';
import { ProductsMini } from '@/components/products/productsMini';

export function First() {
    return (
        <Wrapper>
            <ArtistsSlider/>
            <ProductsMini/>
        </Wrapper>
    )
}
