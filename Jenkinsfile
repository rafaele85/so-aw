pipeline {
    stages {
        stage('Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
            }
        }
    }
}