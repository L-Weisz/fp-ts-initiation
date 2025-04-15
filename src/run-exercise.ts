import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

const runExercise = async (exerciseName: string) => {
  try {
    // Compiler le fichier TypeScript en JavaScript
    await execPromise(`npx tsc src/${exerciseName}.ts --outDir dist`);

    // Exécuter le fichier JavaScript généré
    const execResult = await execPromise(`node dist/${exerciseName}.js`);

    // Afficher la sortie du fichier exécuté
    if (execResult.stdout) {
      console.log(execResult.stdout); // Afficher la sortie (les logs)
    }

    if (execResult.stderr) {
      console.error(execResult.stderr); // Afficher les erreurs si présentes
    }
  } catch (error) {
    console.error("Erreur:", error);
  }
};

const exerciseName = process.argv[2]; // Le nom de l'exercice passé en argument

if (!exerciseName) {
  console.log("Veuillez passer le nom d'un exercice en argument.");
  process.exit(1);
}

runExercise(exerciseName);
