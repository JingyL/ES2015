describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';     
    //  ****  why value here but not innerText?
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add server to table on updateServerTable() ', function () {
    submitServerInfo();
    updateServerTable();

    let serverTb = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverTb.length).toEqual(3);
    expect(serverTb[0].innerText).toEqual('Alice');
    expect(serverTb[1].innerText).toEqual('$0.00');
    expect(serverTb[2].innerText).toEqual('X'); 
 
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverNameInput.value = '';
  });

});


