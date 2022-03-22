export class Dateutil {
  static convertStringToDate(dateString: string) {
    return new Date(Date.parse(dateString) + 24 * 60 * 60 * 1000);
  }

  static convertDateToString(inputDate: Date) {
      let currentMonth = (inputDate.getMonth() + 1).toString();

      if(currentMonth.length === 1) {
          currentMonth = '0' + currentMonth.toString();
      }
      let currentDate = inputDate.getDate().toString();
      if(currentDate.length === 1){
          currentDate = '0' + currentDate.toString();
      }
      return currentMonth + '/' + currentDate + '/' + inputDate.getFullYear();
  }

  static getCurrentDateString() {
      return this.convertDateToString(new Date(Date.now()));
  }

  static getDifferenceInDays(earlierDate: string, laterDate: string): number {
      const currentDate = this.convertStringToDate(earlierDate);
      const futureDate = this.convertStringToDate(laterDate);
      const timeDifference = Math.abs(futureDate.getTime() - currentDate.getTime());
      return Math.ceil(timeDifference / (100 * 60 * 60 * 24));
  }
}
