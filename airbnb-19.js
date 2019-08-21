class CSVParser {

  parseCSV(str) {
          let res = new Array();
          let quoteFlag = false;
          let sb = "";
          let allStrings = str.split("\n");
          for( let j = 0; j < allStrings.length; ++j ) {
            let sentence = allStrings[j];
            let sentArr = sentence.split(',');
            for (let i = 0; i < sentArr.length; i++) {
              let singSent = sentArr[i];
                if (quoteFlag) {
                    if (singSent.charAt(i) == ',') {
                        if (i < singSent.length - 1 && singSent.charAt(i + 1) == '\"') {
                            sb.append("\"");
                            i++;
                        } else {
                            quoteFlag = false;
                        }
                    } else {
                        sb + singSent.charAt(i);
                    }
                } else {
                    if (singSent.charAt(i) == '\"') {
                        quoteFlag = true;
                    } else if (singSent.charAt(i) == ',') {
                        res.push(sb.toString());
                        sb.substring(0);
                    } else {
                        sb + singSent.charAt(i);
                    }
                }
            }

          if (sb.length > 0) {
              res.add(sb.toString());
          }
          return res.join('|');
      }
}
}
cl = new CSVParser();
console.log( cl.parseCSV("Weronica,Zabroska,asdf@gmail.com,running, sci-fi, new krakow, 25\n") );