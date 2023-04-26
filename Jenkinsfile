pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
     stage('Build') {
           steps {
               bat 'npm run build'
               echo "Deliver completed"
           }
    }
      
  stage('Start server') {
    steps {
     script {
      try {
        timeout(time: 20, unit: 'MINUTES') {
          bat 'npm start'
        }
      } catch (err) {
        currentBuild.result = 'FAILURE'
        error("An error occurred while starting the server: ${err}")
      }
    }
  }
}

  

    }

}
