pipeline {
    agent any
    
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
                    steps {
                        bat './jenkins/scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                                bat './jenkins/scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                bat './jenkins/scripts/kill.sh'
                            }
                        }
    }

}

