function doGet() {
  // Lê o arquivo do site chamado 'pagina.html'
  var saida = HtmlService.createTemplateFromFile('pagina').evaluate();
  
  // Ajusta o visual para celular e computador
  saida.addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  
  // Define o nome do produto ou curso na aba do navegador
  saida.setTitle("THE BRAIN SONG REVIEWS AND COMPLAINTS 2027 | 2028");
  
  return saida;
}
