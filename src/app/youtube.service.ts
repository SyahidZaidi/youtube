import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyAdH191F_xOMlBg3Dbmo22ZDCi6Jfrcevs'; // Replace with your API key
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) { }

  searchVideos(searchTerm: string, maxResults: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('q', searchTerm)
      .set('maxResults', maxResults.toString())
      .set('key', this.apiKey);

    return this.http.get(`${this.apiUrl}/search`, { params });
  }

  getPopularVideos(maxResults: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('chart', 'mostPopular')
      .set('regionCode', 'US')
      .set('maxResults', maxResults.toString())
      .set('key', this.apiKey);

    return this.http.get(`${this.apiUrl}/videos`, { params });
  }
}