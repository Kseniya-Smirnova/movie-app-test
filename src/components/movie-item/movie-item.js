import {
    Wrapper,
    PosterDescription,
    DescriptionItem,
    DescriptionLabel,
    PosterImg,
} from './parts';

export const MovieItem = ({ fields, config }) => {
    const { Poster, Title } = fields;
    return (
        <Wrapper>
            <PosterImg src={Poster} alt={Title} />
            <PosterDescription>
                {Object.keys(config).map((key) => (
                    <DescriptionItem key={key}>
                        <DescriptionLabel>{config[key].label}:</DescriptionLabel>
                        { config[key].contentCreator ? config[key].contentCreator(fields) : fields[key]}
                    </DescriptionItem>
                ))}
            </PosterDescription>
        </Wrapper>
    );
}

