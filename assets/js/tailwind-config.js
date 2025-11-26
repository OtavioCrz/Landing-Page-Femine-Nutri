tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#FFFBF8',      // Fundo bege muito claro
                    primary: '#5C3131', // Marrom avermelhado escuro (texto)
                    accent: '#D48484',  // Rosa queimado (botões)
                    soft: '#FCECEC',    // Rosa claro (fundos de destaque)
                    peach: '#FAEAE5',   // Pêssego claro
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Poppins"', 'sans-serif'],
            },
            borderRadius: {
                'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
            }
        }
    }
};
