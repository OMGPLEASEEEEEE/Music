function playScene(sceneNumber) {
  const audioPlayer = document.getElementById('audioPlayer');
  const currentScene = document.getElementById('currentScene');

  switch (sceneNumber) {
    case 1:
      audioPlayer.src = 'https://files.catbox.moe/ilqb7a';
      break;
    case 2:
      audioPlayer.src = 'https://files.catbox.moe/vz6f8s.mp3';
      break;
    case 3:
      audioPlayer.src = 'https://files.catbox.moe/idb1zk.mp3';
      break;
    default:
      console.log('Invalid scene number');
      break;
  }
  currentScene.textContent = `Current Scene: ${sceneNumber}`;
  audioPlayer.load();
  audioPlayer.play();
}