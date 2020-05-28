import json, urllib.request, urllib.error

def fetchDrawDates(game):
    url = "http://www.mpi.gov.tr/sonuclar/listCekilisleriTarihleri.php?tur="+game
    response = urllib.request.urlopen(url)
    data = json.load(response)
    drawDateList = []

    for tarih in data:
        drawDateList.append(tarih.get("tarih"))

    drawDateList.reverse()
    return drawDateList



def fetchDraw(game, date):
    url= "http://www.millipiyango.gov.tr/sonuclar/cekilisler/{}/{}.json".format(game,date)
    try:
        response = urllib.request.urlopen(url)
    except urllib.error.HTTPError as e:
        # Return code error (e.g. 404, 501, ...)
        # ...
        print('HTTPError: {}'.format(e.code))
        try:
                response = urllib.request.urlopen("http://www.millipiyango.gov.tr/sonuclar/cekilisler/sayisal/SAY_{}.json".format(date))
        except urllib.error.HTTPError as e:
                # Return code error (e.g. 404, 501, ...)
                # ...
                print('HTTPErrorSS: {}'.format(e.code))
        except urllib.error.URLError as e:
                # Not an HTTP-specific error (e.g. connection refused)
                # ...
                print('URLError: {}'.format(e.reason))
        else:
                # 200
                 # ...
                print('good')
                data = json.load(response)
                return data.get('data').get('rakamlar')
    except urllib.error.URLError as e:
        # Not an HTTP-specific error (e.g. connection refused)
        # ...
        print('URLError: {}'.format(e.reason))
    else:
        # 200
        # ...
        data = json.load(response)
        return data.get('data').get('rakamlar')


def calcSuperStatistics():
        superArr = [0,71,59,53,68,61,53,52,51,56,58,50,58,78,62,57,53,66,63,63,62,58,64,65,55,52,57,51,50,63,53,60,53,67,59,80,63,76,54,58,60,62,48,64,51,69,62,64,55,58,59,55,43,50,60]
        lastSeen = [0] * 55
        for date in fetchDrawDates("superloto"):
            results = fetchDraw("superloto", date)
            result = results.split('#')
            for i in range(55):
                lastSeen[i] = lastSeen[i]+1
            
            for res in result:
                superArr[int(res)] = superArr[int(res)]+1
                lastSeen[int(res)] = 0
           
            
        createJson("superloto",superArr,lastSeen)
        
    

def calcSayisalStatistics():
        sayisalArr = [0,149,137,136,126,137,122,133,138,142,128,135,141,135,139,133,149,144,156,132,136,151,144,130,129,132,147,136,127,128,136,121,143,120,132,129,149,116,158,135,148,143,130,104,127,120,134,143,125,133]
        lastSeen = [0] * 55
        for date in fetchDrawDates("sayisal"):
            results = fetchDraw("sayisal", date)
            result = results.split('#')
            for i in range(50):
                lastSeen[i] = lastSeen[i]+1
            
            for res in result:
                sayisalArr[int(res)] = sayisalArr[int(res)]+1
                lastSeen[int(res)] = 0
        
        createJson("sayisal", sayisalArr, lastSeen)



def calcOnNumStatistics():
        onNumArr = [0,226,227,244,232,238,205,232,208,203,219,205,239,205,210,220,211,229,227,233,201,226,221,236,226,210,250,219,221,205,219,206,222,233,237,248,230,221,221,220,210,209,231,208,229,211,234,208,226,211,238,221,208,211,212,197,227,225,213,224,222,224,240,209,223,210,219,200,235,239,203,238,239,224,216,213,211,231,220,209,203]
        lastSeen = [0] * 81
        for date in fetchDrawDates("onnumara"):
            results = fetchDraw("onnumara", date)
            result = results.split('#')

            for i in range(81):
                lastSeen[i] = lastSeen[i]+1

            for res in result:
                onNumArr[int(res)] = onNumArr[int(res)]+1
                lastSeen[int(res)] = 0
        
        createJson("onnumara", onNumArr, lastSeen)

def calcSansStatistics():
        sansArr = [0,123,135,120,129,137,137,123,123,134,128,127,132,128,126,145,115,134,119,127,133,110,144,139,133,126,128,117,129,148,113,111,121,114,112]
        topArr = [0,55,65,51,61,59,80,59,55,53,74,59,74,60,59]
        sansLastSeen = [0] * 35
        topLastSeen = [0] * 15
        for date in fetchDrawDates("sanstopu"):
                results = fetchDraw("sanstopu", date)
                result = results.split('#')
                for i in range(35):
                        sansLastSeen[i] = sansLastSeen[i]+1
                for i in range(15):
                        topLastSeen[i] = topLastSeen[i]+1
                for index, res in enumerate(result):
                    if(index==5):
                        topArr[int(res)] = topArr[int(res)]+1
                        topLastSeen[int(res)] = 0
                    else:
                        sansArr[int(res)] = sansArr[int(res)]+1
                        sansLastSeen[int(res)] = 0

        
        createJson("sanstopu", sansArr, sansLastSeen)
        createJson("sanstopu2", topArr, topLastSeen)

def createJson(game, frequency, lastSeen):
        x = {}
        for no in range(len(frequency)):
                if(no != 0):
                         x[no] = {
                        "no":no,
                        "siklik":frequency[no],
                        "gorulme":lastSeen[no]
                        }
        fileName = "{}.json".format(game)
        jsonFile = open(fileName,"w+")
        print(json.dumps(x))
        jsonFile.write(json.dumps(x))
        jsonFile.close()

        

calcOnNumStatistics()
calcSansStatistics()
calcSayisalStatistics()
calcSuperStatistics()