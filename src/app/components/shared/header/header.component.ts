import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule],
  styles: [`
    mat-toolbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      color: white !important;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      padding: 1.5rem 2rem !important;
      height: auto !important;
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    mat-toolbar::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      z-index: 1;
    }

    mat-icon {
      font-size: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      padding: 0.5rem;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    h1 {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .badge {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }

    @media (max-width: 768px) {
      mat-toolbar {
        padding: 1rem !important;
        min-height: 70px;
      }

      mat-icon {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        padding: 0.4rem;
      }

      h1 {
        font-size: 1.25rem;
        flex-direction: column;
        gap: 0.25rem;
        text-align: center;
      }

      .badge {
        font-size: 0.65rem;
        padding: 0.2rem 0.6rem;
      }
    }
  `],
  template: `
    <mat-toolbar>
      <div class="header-content">
        <mat-icon>image_search</mat-icon>
        <h1>
          {{ title() }}
          <span class="badge">AI • PWA</span>
        </h1>
      </div>
    </mat-toolbar>
  `,
})
export class HeaderComponent {
  title = input<string>('Detector de Objetos');
}
