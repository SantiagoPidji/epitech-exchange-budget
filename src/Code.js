function clotureMensuelle() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Noms des onglets : à modifier si les tiens sont écrits différemment
  const sheetSource = ss.getSheetByName("Réponses au formulaire");
  const sheetArchive = ss.getSheetByName("Archives");
  
  if (!sheetSource || !sheetArchive) {
    Logger.log("Erreur : Les onglets n'ont pas été trouvés.");
    return;
  }

  // On récupère toutes les données
  const data = sheetSource.getDataRange().getValues();
  if (data.length <= 1) return; // On s'arrête s'il n'y a que la ligne d'en-tête

  // On définit le seuil : le 1er du mois en cours, à 00h00
  const today = new Date();
  const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  let rowsToArchive = [];

  // On boucle à l'envers (crucial pour ne pas décaler les index lors des suppressions)
  for (let i = data.length - 1; i >= 1; i--) {
    let rowDate = new Date(data[i][0]); // On part du principe que l'horodatage est en colonne A (index 0)

    if (rowDate < firstDayCurrentMonth) {
      rowsToArchive.push(data[i]);
      sheetSource.deleteRow(i + 1); // i+1 car l'index des lignes Sheets commence à 1, pas 0
    }
  }

  // Écriture en batch dans l'onglet Archives pour optimiser le temps d'exécution
  if (rowsToArchive.length > 0) {
    rowsToArchive.reverse(); // On remet dans l'ordre chronologique
    
    const nextFreeRow = sheetArchive.getLastRow() + 1;
    sheetArchive.getRange(nextFreeRow, 1, rowsToArchive.length, rowsToArchive[0].length).setValues(rowsToArchive);
  }
}