import path from 'path'
import { filter, first, last, map, Observable, take } from 'rxjs'
import fs from 'fs' // pacote para fazer a leitura dos arquivos

const filePaths: string[] = [
  path.join(__dirname, 'files', 'app_1.txt'),
  path.join(__dirname, 'files', 'app_2.txt'),
  path.join(__dirname, 'files', 'app_3.txt'),
  path.join(__dirname, 'files', 'app_4.txt'),
  path.join(__dirname, 'files', 'estilo_1.css'),
  path.join(__dirname, 'files', 'estilo_2.css'),
  path.join(__dirname, 'files', 'estilo_3.csS'),
  path.join(__dirname, 'files', 'estilo_4.css'),
  path.join(__dirname, 'files', 'estrutura_1.html'),
  path.join(__dirname, 'files', 'estrutura_2.html'),
  path.join(__dirname, 'files', 'estrutura_3.html'),
  path.join(__dirname, 'files', 'estrutura_4.html')
]

const isCSS = /^((.|#|:){0,1}(\w+-{0,1})+\s*{(\s*(\w+-{0,1})+:\s*(\w+\s*)+;\s*)+\s*}\s*)/i
const isHTML = /^<!DOCTYPE html>/i

console.log(lerArquivos(filePaths))


// Observable é uma classe que o RXJS ofereçe 
function lerArquivos(arquivos: string[]) {
  /**
   * Observables são fontes de dados que enviam dados/informações de forma continua
   */

  /**
   * A classe Observable recebe como parametro uma função responsavel
   * pela geração dos dados que o Observable enviará
   */

  /**
   * subsctibe é uma referencia do dependente da informação
   */

  /**
   * O metedodo forEach() (paraCada) serve para fazer um laço de repetição dentro de um array 
   */
  const leitor = new Observable<string>((subsctibe) => {
    arquivos.forEach((arquivo) => {

      /**
       * readFileSync fará a leitura de um arquivo a partir do caminho desse arquivo no seu 
       * computador
       */
      try {
        const conteudo = fs.readFileSync(arquivo, { encoding: 'utf-8' })
        subsctibe.next(conteudo) // linha 100

      } catch (error) {
        subsctibe.error(`Não foi possivel ler o arquivo, esta no caminho ${arquivo}`)
      }
      // resposnavel por mandar a msg de sucesso
      // subsctibe.error() // reposanevel por mandar a msg de erro
      // subsctibe.complete() // responsavel por mandar a msg de completo
      /**
       * Envio de dados do Observable <--
       * 
       * 3 ESTÁGIOS 
       *  ->  Sucesso: O Observable conseguiu realizar seu trabalho sem nenhum problema
       *        e enviou os dados com sucesso.
       * 
       * -> Erro:  O Observable teve algum problema durante a sua execução e não conseguiu 
       *              realizar a sua tarefa de maneira satisfatoria e não consguiu enviar os dados
       *              Quando um observable passa pelo estagio de erro, sua execuçõa para automáticamente
       * 
       *  -> Completo: O Observable realizou TODAS as suas tarefas com sucesso e não possui
      *              mais nenhum dado para poder enviar.
       * 
       */

    })
    subsctibe.complete()
  })

  return leitor

}

let obs = lerArquivos(filePaths)
/**
 * O metodo subscribe() dos observables te permite acessar os valores
 * que o observable te envia de forma continua
 */

/**
 * 1º Sucesso
 * 2º Erro
 * 3º Completo
 */
/***
 * Operadores -> Funções que servem para manipular os dados
 *               que os observables enviam
 */
/**
 * Utilizanbdo algum operador do Rxjs, vamos extrair a primeira palavra
 * de cada arquivo
 */
/**
 * A função pipe() serve para você passar os operadores do RXJS que modificarão
 * os dados que o Observable retorna para você
 */
obs
.pipe(
 /*map((texto) => {
    return texto.split(' ')[0]
  }),
  map((palavra) => {
    return palavra.length
  })*/
  /*
  filter((txt) => {
    
    return !isHTML.test(txt) && !isCSS.test(txt)
  })*/
  //take(3)
  //first()
  /*
  first((txt) => {
    return isHTML.test(txt)
  })*/
  //last()
  last((txt) => {
    
    return isCSS.test(txt)
  })
)
.subscribe(
  (conteudoLido) => { // Tratando cada parametro de forma individual
    console.log(' ---------- ARQUIVO LIDO COM SUCESSO --------------')
    console.log(conteudoLido)
    console.log('---------------------------------------------------\n\n')
  },
  (erro) => {
    console.log("OCORREU UM ERRO NA EXECUÇÃO DO OBSERVABLE")
    console.log(erro)
  },
  () => {
    console.log("TODOS OS ARQUIVOS FORAM LIDOS COM SUCESSO!!!")
  }
)

/**
obs.subscribe(
  (conteudoLido) => {
    console.log(`Este arquivo possui ${conteudoLido.length} caracteres`)
})
**/