/**
 * Utility functions for Google Sheets integration
 */

/**
 * Submits form data to Google Sheets
 * @param data - The form data to submit
 * @returns Promise with the response
 */
export async function submitToGoogleSheets(data: any): Promise<{ success: boolean; message: string }> {
  try {
    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || '';
    
    if (!GOOGLE_SHEETS_URL) {
      console.error('Google Sheets URL is not configured');
      return { 
        success: false, 
        message: 'Konfigurasi pengiriman data belum lengkap. Silakan hubungi administrator.' 
      };
    }

    // Format date to string if it exists
    const formattedData = { ...data };
    if (formattedData.tanggalLahir instanceof Date) {
      formattedData.tanggalLahir = formattedData.tanggalLahir.toISOString().split('T')[0]; // YYYY-MM-DD format
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    return { 
      success: true, 
      message: 'Data berhasil dikirim ke database!' 
    };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { 
      success: false, 
      message: 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.' 
    };
  }
}