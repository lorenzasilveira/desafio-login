const usuarios = [
    {
        id: 1,
        nome: 'Renan Lorenzo Caldeira',
        email: 'renan_lorenzo_caldeira@destaco.com',
        senha: 'fKXQffXys1',
        expirado: false
    },
    {
        id: 2,
        nome: 'Ricardo Tiago Francisco Moreira',
        email: 'ricardo_moreira@globomail.com',
        senha: '3nwlyFep7t',
        expirado: true
    },
    {
        id: 3,
        nome: 'Emilly Analu Louise Farias',
        email: 'emilly_analu_farias@provale.com.br',
        senha: 'wyPpEDgTet',
        expirado: false
    }
];

export function realizarLogin(email, senha) {
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];
        if (usuario.email == email && usuario.senha == senha) {
            if (usuario.expirado) {
                return 'Credenciais expiradas!';
            }
            return 'Login realizado com sucesso!';
        }
    }
    return 'Credenciais incorretas!';
}