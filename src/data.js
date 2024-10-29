import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CONCEITOS_CHAVE = [
  {
    imagem: componentsImg,
    titulo: 'Componentes',
    descri:
      'O principal bloco de construção da UI - compor a interface do utilizador combinando vários componentes.',
  },
  {
    imagem: jsxImg,
    titulo: 'JSX',
    descri:
      'Devolver o código HTML (ish) (potencialmente dinâmico) para definir a marcação real que será renderizada.',
  },
  {
    imagem: propsImg,
    titulo: 'Props',
    descri:
      'Torne os componentes configuráveis ​​(e, portanto, reutilizáveis) passando-lhes dados de entrada.',
  },
  {
    imagem: stateImg,
    titulo: 'State',
    descri:
      'Dados geridos pelo React que, quando alterados, fazem com que o componente seja renderizado novamente e a IU seja atualizada.',
  },
];

export const EXEMPLOS = [
  {
    titulo: 'Componentes',
    descri:
      'Componentes são os blocos de construção de aplicativos React. Um componente é um módulo autocontido (HTML + CSS opcional + JS) que renderiza alguma saída.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  {
    titulo: 'JSX',
    descri:
      'JSX é uma extensão de sintaxe para JavaScript. É similar a uma linguagem de template, mas tem todo o poder do JavaScript (por exemplo, pode gerar conteúdo dinâmico).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  {
    titulo: 'Props',
    descri:
      'Componentes aceitam entradas arbitrárias chamadas props. Eles são como argumentos de função.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  {
    titulo: 'State',
    descri:
      'O estado permite que os componentes do React alterem sua saída ao longo do tempo em resposta às ações do usuário, respostas da rede e qualquer outra coisa.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
];
