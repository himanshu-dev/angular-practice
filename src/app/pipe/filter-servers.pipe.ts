import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterServers',
  pure: false
})
export class FilterServersPipe implements PipeTransform {

  transform(servers: any[], searchString: string, prop: string): any {
    if (!searchString || searchString.length === 0 || servers.length === 0) {
      return servers;
    }
    return servers.filter((server) => {
      return server[prop].indexOf(searchString) !== -1;
    });
  }

}
