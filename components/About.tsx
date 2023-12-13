import { Text, Container, Anchor, Button, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();
    const matches = useMediaQuery('(max-width: 768px)');

    return (
        <section id="about">
            <Container fluid>

                <div className="about-content">

                    <div style={{ marginBottom: 15 }}>
                        <Text tt="uppercase" fw={500} c="yellow">
                            MADE WITH REACT AND MANTINE
                        </Text>
                    </div>

                    <div style={{ marginBottom: 15 }}>
                        <Text>
                            <Box style={matches ? { fontSize: '2.8rem !important' } : undefined}>
                                <h1 className="title">Simple Mantine Template</h1>
                            </Box>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="black">
                            Simple showcase of this powerful and well implemented library called <Anchor href="https://mantine.dev/">Mantine</Anchor>.
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-one" smooth duration={500}>
                            <Button color="yellow" rightSection={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Tell me more</Button>
                        </Link>

                        <Button variant="default" radius="lg" size="md">Other stuff</Button>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;