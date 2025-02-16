import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const SectionTwo = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-two">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col span={{
                        sm: 8,
                        lg: 8,
                        xs: 6
                    }}>
                        <div style={{ marginBottom: 20 }}>
                            <Text c="black">
                                <Title order={1}>You can put whatever you want here</Title>
                                Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike.
                                In 1998's "Saving Private Ryan," directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.
                            </Text>
                        </div>
                        <Button color="yellow">Check it out</Button>
                    </Grid.Col>
                    <Grid.Col span={{
                        xs: 6,
                        sm: 4,
                        lg: 4,
                    }}>
                        <Image src="/images/lime-surfing.png" alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionTwo;