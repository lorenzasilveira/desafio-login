import { realizarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes de Login', function () {
    it('Validar que o login é realizado com sucesso com credenciais não expiradas', function () {
        const email = 'renan_lorenzo_caldeira@destaco.com';
        const senha = 'fKXQffXys1';
        const retornoEsperado = 'Login realizado com sucesso!';

        const retornoObtido = realizarLogin(email, senha);

        assert.equal(retornoObtido, retornoEsperado);
    });

    it('Validar que o login não é realizado com credenciais expiradas', function () {
        const email = 'ricardo_moreira@globomail.com';
        const senha = '3nwlyFep7t';
        const retornoEsperado = 'Credenciais expiradas!';

        const retornoObtido = realizarLogin(email, senha);

        assert.equal(retornoObtido, retornoEsperado);
    });

    it('Validar que o login não é realizado com usuário inexistente', function () {
        const email = 'mateus_nicolas_nunes@terrabrasil.com.br';
        const senha = 'wyPpEDgTet';
        const retornoEsperado = 'Credenciais incorretas!';

        const retornoObtido = realizarLogin(email, senha);

        assert.equal(retornoObtido, retornoEsperado);
    });

    it('Validar que o login não é realizado com usuário inexistente', function () {
        const email = 'emilly_analu_farias@provale.com.br';
        const senha = 'CoyDn4h7hk';
        const retornoEsperado = 'Credenciais incorretas!';

        const retornoObtido = realizarLogin(email, senha);

        assert.equal(retornoObtido, retornoEsperado);
    });
});