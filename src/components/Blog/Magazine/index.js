import React from 'react';
import { 
    MagazineContainer,
    MagazineWrapper,
    MagazineRow,
    MagazineCol1,
    MagazineCol2,
    TextWrapper,
    Heading,
    Paragraph,
    ImgWrap,
    Img
} from './MagazineElements';

const MagazineP = ({ id, imgStart, headingText, headline, paraText, para, img, alt }) => {
    return (
        <>
            <MagazineContainer id={id}>
                <MagazineWrapper>
                    <MagazineRow imgStart={imgStart}>
                        <MagazineCol1>
                            <TextWrapper>
                                <Heading headingText={headingText}>{headline}</Heading>
                                <Paragraph paraText={paraText}>{para}</Paragraph>
                            </TextWrapper>
                        </MagazineCol1>
                        <MagazineCol2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </MagazineCol2>
                    </MagazineRow>
                </MagazineWrapper>
            </MagazineContainer>
        </>
    );
};

export default MagazineP;
