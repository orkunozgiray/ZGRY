import React from 'react';
import { ButtonBlog } from '../ButtonElement';
import { 
    BlogContainer,
    BlogWrapper,
    BlogRow,
    BlogColumn1,
    BlogColumn2,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    TextWrapper,
    Img,
    ImgWrap
} from './BlogElements';

const BlogP = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2
    }) => {
    return (
        <>
            <BlogContainer lightBg={lightBg} id={id}>
                <BlogWrapper>
                    <BlogRow imgStart={imgStart}>
                        <BlogColumn1>
                            <TextWrapper>
                                <TopLine >{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonBlog 
                                        to='magazine'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </ButtonBlog>
                                </BtnWrap>
                            </TextWrapper>
                        </BlogColumn1>
                        <BlogColumn2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </BlogColumn2>
                    </BlogRow>
                </BlogWrapper>
            </BlogContainer> 
        </>
    )
}

export default BlogP;
