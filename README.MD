## LocalStorage/SessionStorage

`localStorage` e `sessionStorage` são APIs do navegador que permitem armazenar dados no lado do cliente. A principal diferença entre eles está no escopo de persistência dos dados:

- **`localStorage`**: Os dados persistem mesmo após o fechamento do navegador ou recarregamento da página. Ideal para armazenar informações que precisam ser mantidas por longos períodos.
- **`sessionStorage`**: Os dados persistem apenas enquanto a aba ou janela do navegador estiver aberta. Uma vez fechada a aba ou janela, os dados são apagados.

#### Local storage

```
// Armazenando um valor no localStorage
localStorage.setItem('username', 'João');

// Recuperando o valor do localStorage
const username = localStorage.getItem('username');
console.log(username); // Saída: "João"

// Removendo um item do localStorage
localStorage.removeItem('username');

// Limpando todos os dados do localStorage
localStorage.clear();
```

#### Session storage

```
// Armazenando um valor no sessionStorage
sessionStorage.setItem('authToken', '12345');

// Recuperando o valor do sessionStorage
const authToken = sessionStorage.getItem('authToken');
console.log(authToken); // Saída: "12345"

// Removendo um item do sessionStorage
sessionStorage.removeItem('authToken');

// Limpando todos os dados do sessionStorage
sessionStorage.clear();
```
