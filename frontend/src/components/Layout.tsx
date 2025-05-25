/**
 * Layout.tsx
 * Componente principal de layout que fornece a estrutura básica para todas as páginas
 * Inclui AppBar, navegação e container para conteúdo
 */

import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    useTheme,
    Paper,
    Breadcrumbs,
    Link,
    IconButton,
    Fade
} from '@mui/material';
import { 
    LibraryBooks,
    ArrowBack as ArrowBackIcon,
    Home as HomeIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

// Props do componente Layout
interface LayoutProps {
    children: React.ReactNode;     // Conteúdo a ser renderizado dentro do layout
    title: string;                 // Título da página
    showBackButton?: boolean;      // Controla a exibição do botão de voltar
}

export const Layout: React.FC<LayoutProps> = ({ children, title, showBackButton = false }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    // Função para voltar à página anterior
    const handleBack = () => {
        navigate(-1);
    };

    // Gera o componente de breadcrumbs para navegação
    const getBreadcrumbs = () => {
        const paths = location.pathname.split('/').filter(Boolean);
        if (paths.length === 0) return null;

        return (
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                {/* Link para a página inicial */}
                <Link
                    component="button"
                    variant="body1"
                    onClick={() => navigate('/')}
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        color: theme.palette.text.secondary,
                        textDecoration: 'none',
                        '&:hover': {
                            color: theme.palette.primary.main,
                        }
                    }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                    Início
                </Link>
                {/* Título da página atual */}
                <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                    {title}
                </Typography>
            </Breadcrumbs>
        );
    };

    return (
        // Container principal com altura mínima de 100vh
        <Box sx={{ 
            minHeight: '100vh', 
            backgroundColor: theme.palette.grey[50],
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Barra superior fixa */}
            <AppBar 
                position="sticky" 
                elevation={0}
                sx={{
                    backgroundColor: 'white',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    color: theme.palette.text.primary
                }}
            >
                <Toolbar>
                    {/* Botão de voltar (condicional) */}
                    {showBackButton && (
                        <IconButton
                            edge="start"
                            onClick={handleBack}
                            sx={{ mr: 2 }}
                            color="inherit"
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                    {/* Ícone e título do sistema */}
                    <LibraryBooks sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                        Sistema de Biblioteca
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Container principal do conteúdo */}
            <Container 
                maxWidth="lg" 
                sx={{ 
                    mt: 4, 
                    mb: 4, 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Animação de fade ao carregar o conteúdo */}
                <Fade in timeout={500}>
                    <Box>
                        {/* Navegação breadcrumb */}
                        {getBreadcrumbs()}
                        {/* Card principal do conteúdo */}
                        <Paper 
                            elevation={0} 
                            sx={{ 
                                p: 4,
                                backgroundColor: 'white',
                                borderRadius: 2,
                                border: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            {/* Título da página */}
                            <Typography 
                                variant="h4" 
                                component="h1" 
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.grey[900],
                                    mb: 4
                                }}
                            >
                                {title}
                            </Typography>
                            {/* Conteúdo da página */}
                            {children}
                        </Paper>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
}; 