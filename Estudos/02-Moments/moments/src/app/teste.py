import wifi

wifi_scanner = wifi.Scanner()
results = wifi_scanner.scan()
for result in results:
    print(f"Rede Wi-Fi: {result.ssid}, BSSID: {result.bssid}, Frequência: {result.frequency}, Qualidade: {result.quality}")