export class LoggingService {
  // logInfo(message: any) {
  //   console.log(JSON.stringify(message));
  // }

  logInfo(title: any = '', message: any = '') {
    console.log(JSON.stringify(title), message ? JSON.stringify(message) : '');
  }
}
