"use client";

import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.yellow[6]}}>
            <Container>
                <Grid justify="space-around">

                    <Grid.Col span={{
                        xs: 12,
                        md: 8,
                        lg: 8,
                    }}>
                        
                        <Text size="xl" c="white" mb="10px" style={{
                            fontWeight: 700,
                        }}>Simple Mantine template</Text>

                        <Text color="white" mb="5px">
                            You can do anything you want with this template, from portfolios to other stuff.
                        </Text>

                        <Text color="white" mb="20px">
                            You can find the illustrations I used on <Anchor href="https://icons8.com/">www.icons8.com</Anchor>
                        </Text>

                        <Button variant="white" color="black" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
                    </Grid.Col>

                    <Grid.Col span={{
                        xs: 12,
                        sm: 4,
                        md: 4,
                        lg: 4,
                    }}>
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            Template made by
                            <Anchor href="https://github.com/Lanace">
                                <UnstyledButton>
                                    <Group>
                                        <Avatar size={40} color="orange">JIJ</Avatar>
                                        <div>
                                            <Text>Lanace</Text>
                                            <Text size="xs" color="dimmed">lanace93@gmail.com</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};