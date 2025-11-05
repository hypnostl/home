const resizedImagesData = []; 

function clearPage() {
    window.location.reload();
}

function processMultipleImages() {
    const fileInput = document.getElementById('imageInput');
    const files = fileInput.files;
    const downloadContainer = document.getElementById('downloadContainer');
    const messageDiv = document.getElementById('message');
    const errorDiv = document.getElementById('error-message');
    const downloadZipButton = document.getElementById('downloadZipButton');


    downloadContainer.innerHTML = '';
    messageDiv.textContent = '';
    errorDiv.textContent = '';
    resizedImagesData.length = 0; // Limpa o array de dados das imagens
    downloadZipButton.style.display = 'none'; // Esconde o botão ZIP inicialmente

    if (files.length === 0) {
        errorDiv.textContent = "Por favor, selecione uma ou mais imagens.";
        return;
    }

    messageDiv.textContent = `Processando ${files.length} imagem(ns)...`;

    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');
    const targetSize = 1000;
    canvas.width = targetSize;
    canvas.height = targetSize;

    let processedCount = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = new Image();

            img.onload = function() {
                ctx.clearRect(0, 0, targetSize, targetSize); // Limpa o canvas
                
                const imgWidth = img.width;
                const imgHeight = img.height;

                // Lógica de Redimensionamento 'Contain' (Manter Proporção)
                const scale = Math.min(targetSize / imgWidth, targetSize / imgHeight);
                const scaledWidth = imgWidth * scale;
                const scaledHeight = imgHeight * scale;
                const x = (targetSize / 2) - (scaledWidth / 2);
                const y = (targetSize / 2) - (scaledHeight / 2);

                ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

                // Obtém o Data URL da imagem redimensionada
                const resizedDataUrl = canvas.toDataURL('image/png'); 
                
                // Armazena a imagem e o nome original para o ZIP
                resizedImagesData.push({ name: file.name, data: resizedDataUrl });

                // Cria link de download individual
                const link = document.createElement('a');
                link.href = resizedDataUrl;
                link.download = `redimensionada_${file.name.replace(/\.[^/.]+$/, "")}.png`;
                link.textContent = `Baixar: ${file.name}`;
                link.className = 'download-item';
                downloadContainer.appendChild(link);
                downloadContainer.appendChild(document.createElement('br'));

                processedCount++;
                if (processedCount === files.length) {
                    messageDiv.textContent = `Todas as ${files.length} imagens foram processadas!`;
                    downloadZipButton.style.display = 'inline'; // Mostra o botão ZIP
                }
            };

            img.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }
    document.getElementById('output').style.display = 'none';
}


function downloadAllAsZip() {
    if (resizedImagesData.length === 0) {
        alert("Nenhuma imagem processada para baixar.");
        return;
    }

    const zip = new JSZip();

    // Adiciona cada imagem ao arquivo ZIP
    resizedImagesData.forEach((item, index) => {
        // Remove 'data:image/png;base64,' do Data URL para adicionar ao ZIP
        const base64Data = item.data.split(',')[1];
        zip.file(`redimensionada_${item.name.replace(/\.[^/.]+$/, "")}.png`, base64Data, { base64: true });
    });

    // Gera o arquivo ZIP
    zip.generateAsync({ type: "blob" })
       .then(function(content) {
           // Usa FileSaver.js para salvar o arquivo
           saveAs(content, "imagens_redimensionadas.zip");
           document.getElementById('message').textContent = "Arquivo ZIP gerado e pronto para download!";
       })
       .catch(function(error) {
           document.getElementById('error-message').textContent = `Erro ao gerar o ZIP: ${error}`;
       });
}