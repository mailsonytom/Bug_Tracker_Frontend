pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
               bat 'npm install -g @angular/cli'

            }
        }
        
        
        stage('Start server') {
            steps {
                bat 'start npm start'
            }
        }
        stage('Build') {
      steps {
        bat 'npm run build'
          echo "Deliver completed"
      }
    }
  

    }

}
