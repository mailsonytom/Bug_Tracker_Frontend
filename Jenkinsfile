pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
               
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
    stage('Test') {
    steps {
        timeout(time: 20, unit: 'MINUTES') {
            bat 'npm test'
            echo "Tests passed"
        }
    }
}

    }

}
